import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [text, setText] = useState('');

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const handleChange = (value) => {
    setText(value);
  };

  console.log(text);

  return (
    <div>
      <ReactQuill
        value={text}
        modules={modules}
        formats={formats}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEditor;
