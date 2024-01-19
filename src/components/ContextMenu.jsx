import { useState } from 'react';
import './JoditCustomEditor.scss';

const ContextMenu = ({ children, menuItems }) => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setX(event.clientX);
    setY(event.clientY);
    setVisible(true);
  };

  const handleClick = () => {
    setVisible(false);
  };

  
  const handleInsert = (item) => {
    const editor = document.querySelector('.jodit-wysiwyg');
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const fragment = range.createContextualFragment(item);
    range.deleteContents();
    range.insertNode(fragment);
    range.collapse();
    selection.removeAllRanges();
    selection.addRange(range);
    editor.focus();
  }
  
  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick}>
      {children}
      {visible && (
        <div style={{ top: y, left: x, position: 'absolute', zIndex: 9999 }}>
          {menuItems.map((item, index) => (
            <div key={index} onClick={item.onClick}>
              <span
                className="hide-icon"
                style={{ lineHeight: 2 }}
                draggable="true"
                dangerouslySetInnerHTML={{ __html: item.value }}
                onDragStart={(event) => {
                  event.dataTransfer.setData('text/plain', item.value);
                }}
                onDragEnd={() => {
                  setVisible(false);
                }}
                onClick={() => handleInsert(item.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;