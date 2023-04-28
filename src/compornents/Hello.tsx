import React from 'react';
type HelloProps = {
    text: {
        a: number;
        b: number;
        message: string;
        //
    }
    isAuth: boolean;
}

const Hello = (props: HelloProps) => {
    // const {message: string} = props.text.message;
    const {isAuth} = props;
    const {text} = props;
  return (
    <div>
        <h1>hello {text.message}</h1>
        <h2>{`値は${props.isAuth}です！`}</h2>
    </div>
  )
}

export default Hello