// joditConfig.js
import { useMemo } from 'react';
import { fillMentions } from '../functions/functions';
import { names } from '../data/data';

export const useJoditConfig = (setContent, editor) => useMemo(() => ({
  readonly: false,
  hidePoweredByJodit: true,
  statusbar: false,
  style: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '16px',
    color: '#333',
    lineHeight: '1.5',
    padding: '10px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  askBeforePasteHTML: false,
  // buttons: [ // check https://rmamuzic.rs/node_modules/jodit/examples/index.html for more buttons
  //   'bold',
  //   'strikethrough',
  //   'underline',
  //   'italic', '|',
  //   'ul',
  //   'ol', '|',
  //   'outdent', 'indent', '|',
  //   'font',
  //   'fontsize',
  //   'brush',
  //   'paragraph', '|',
  //   'image',
  //   'table',
  //   'link', '|',
  //   'align', 'undo', 'redo', '|',
  //   'hr',
  // ],
  // buttonsXS: [ 
  //     'bold',
  //     'image', '|',
  //     'brush',
  //     'paragraph', '|',
  //     'align', '|',
  //     'undo', 'redo', '|',
  //     'eraser',
  //     'dots'
  // ],
  // buttons: [
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strikethrough",
  //   "ul",
  //   "ol",
  //   "undo",
  //   "redo",
  // }
  // ],
  events: {
    // keydown: function (event) {
    //   // Check if Command was pressed along with Enter
    //   if (
    //     (event.metaKey && event.key === 'Enter')
    //   ) {
    //     console.log("Command was pressed along with Enter")
    //     // Prevent default behavior
    //     event.preventDefault();
    //   }
    // },
    keyup: function (event) {
      if (event.key === ' ' || event.key === "&nbsp;") {
        fillMentions(editor, names, setContent);
      }
    },
    // drop span inside the editor
    afterInit: function (editor) {
      let draggedElement = null;

      editor.events.on('dragstart', function (event) {
        // handle drag start event
        if (event.target.tagName === 'SPAN' && editor.container.contains(event.target)) {
          draggedElement = event.target;
          event.dataTransfer.setData('text/plain', draggedElement.outerHTML);
          event.dataTransfer.effectAllowed = 'move';
        }
      });

      editor.events.on('dragover', function (event) {
        // handle drag over event
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      });

      editor.events.on('drop', function (event) {
        // handle drop event
        event.preventDefault();
        event.stopPropagation();
        // create a range from the drop location
        const range = document.caretRangeFromPoint(event.clientX, event.clientY);
        // check if draggedElement is null
        if (draggedElement === null) {
          // create a new element from the transferred data
          const data = event.dataTransfer.getData('text/plain');
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data;
          draggedElement = tempDiv.firstChild;
        }
        // check if the range is not null
        if (range) {
          // delete the contents of the range
          range.deleteContents();
          // insert the dragged element at the drop location
          range.insertNode(draggedElement);
        }
        draggedElement = null;
      });
      
      editor.events.on('dragend', function (event) {
        // handle drag end event
        draggedElement = null;
        
      });
    }
    // end drop
  }
}), [editor, setContent]);