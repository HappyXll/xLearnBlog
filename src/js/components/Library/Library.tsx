import * as React from 'react'
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Demo from './Demo';
import DemoReducer from './DemoReducer';

const Liabrary = () => (
  <>
  <p className='flex'>2222</p>
  <div>
  <Button theme="primary">Primary</Button>
  </div>
  
  <div>
  <Button theme="secondary">Primary</Button>
  </div>
  <ButtonGroup>
   <Button theme="primary">Primary</Button>
   <Button theme="primary">Primary</Button>
   <Button theme="primary">Primary</Button>
  </ButtonGroup>
  <Demo/>
  <DemoReducer/>
  </>
);

export default Liabrary;