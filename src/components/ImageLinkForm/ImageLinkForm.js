import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div id='responsive-img' style={{ marginLeft: '-72vh', marginTop: '20vh' }}>
      <p className='f3'>
        {'This Smart Brain will detect faces and age in your pictures.'}
      </p>
      <div className='center'>
        <div className='pa4 br3 shadow-5 form center'>
          <input
            className='f4 pa2 w-70 center input'
            type='text'
            placeholder='your picture link here ...'
            onChange={onInputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white btn'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
