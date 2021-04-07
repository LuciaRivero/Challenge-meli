import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const override = `
  display: block;
  margin: 0 auto;
`;


const Loading = () => {
    return (  
        <ClipLoader  css={override} size={150} />
    );
}
 
export default Loading;