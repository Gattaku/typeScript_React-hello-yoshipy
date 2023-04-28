import React from 'react';
type HelloProps = { //受け取るPropsの値すべての型を定義しておく
    text: {
        a: number;
        b: number;
        message: string;
    }
    isAuth: boolean;
    //
    
}

const Hello = (props: HelloProps) => {
    const {text, isAuth} = props; //受け取ったPropsを分解する
  return (
    <div>
        <h1>hello {text.message}</h1>
        <h2>{`値は${props.isAuth}です！`}</h2>
    </div>
  )
}

export default Hello