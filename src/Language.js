import React from 'react';
import './style.css';

function Language() {
  return (
    <form>
      <label>언어 선택</label>
      <select name="language">
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ja">Japanese</option>
        <option value="zn-CN">Chinese</option>
      </select>
    </form>
  );
}

export default Language;
