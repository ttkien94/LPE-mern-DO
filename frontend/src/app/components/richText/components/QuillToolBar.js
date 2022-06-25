import React from "react";

function QuillToolBar() {
  return (
    <div id="toolbar">
      <select
        className="ql-header"
        defaultValue={""}
        onChange={(e) => e.persist()}
      >
        <option value="1" />
        <option value="2" />
        <option value="" />
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-insertImage">I</button>
      {/* <button className="ql-insertVideo">V</button> */}
      {/* <button className="ql-insertFile">F</button> */}
      <button className="ql-link" />
      <button className="ql-code-block" />
      <button className="ql-video" />
      <button className="ql-blockquote" />
      <button className="ql-clean" />
    </div>
  );
}

export default QuillToolBar;
