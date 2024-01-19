import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { replaceSpanContent, restoreSpanContent } from '../functions/functions';
import ContextMenu from './ContextMenu';
import { names, initial_value } from '../data/data';
import { useJoditConfig } from '../configuration/joditConfig';

import './JoditCustomEditor.scss';

const JoditCustomEditor = () => {
  const editor = useRef(null);
  const [replacedStatus, setReplacedStatus] = useState(true);

  const [content, setContent] = useState(`${initial_value}`); // Maybe this can be changed to a useRef to prevent the cursor from jumping at the beginning of the editor

  const config = useJoditConfig(setContent, editor);

  const handleToggleValues = () => {
    if (replacedStatus) {
      setContent(replaceSpanContent(content));
    } else {
      setContent(restoreSpanContent(content, names));
    }
    setReplacedStatus(!replacedStatus);
  }

  let editorContent = content; // This is needed to prevent the cursor from jumping at the beginning of the editor

  // useEffect(() => {
  //   if (editor.current && editor.current.jodit) {
  //     editor.current.jodit.events.on('drop', function (event) {
  //       event.preventDefault();
  //       // handle drop event
  //       // insert the dragged element at the drop location
  //     });
  //   }
  // }, [editor]);

  return (
    <div>
      <div id="joditEditor">
        <ContextMenu menuItems={names}>
          <JoditEditor
            ref={editor} // needed to access editor instance and events
            value={content}
            config={config}
            onChange={newContent => { editorContent = newContent; }}
            onBlur={() => { setContent(editorContent); }}
            // onChange={newContent => setContent(newContent)}
            // onBlur={newContent => setContent(newContent)}
          />
        </ContextMenu>
        <br />
        <button onClick={handleToggleValues}>Toggle values</button>
        <br />
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              <span
                className="hide-icon"
                style={{ lineHeight: 2 }}
                draggable="true"
                dangerouslySetInnerHTML={{ __html: name.value }}
                onDragStart={(event) => {
                  event.dataTransfer.setData('text/plain', name.value);
                  event.dataTransfer.effectAllowed = "move";
                }}                
              />
            </li>
          ))}
        </ul>
        <br />
        <hr />
        <div>
          <h3>Output:</h3>
          {content}
        </div>
      </div>
    </div>
  );
}

export default JoditCustomEditor;