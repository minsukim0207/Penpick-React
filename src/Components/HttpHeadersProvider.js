// HttpHeadersProvider.js 파일 내용 (예시)
import React, { createContext, useContext, useState } from 'react';

export const HttpHeadersContext = createContext();

export const HttpHeadersProvider = ({ children }) => {
  const [headers, setHeaders] = useState({
    // 초기값 설정
    "Authorization": `Bearer ${localStorage.getItem("bbs_access_token") || ''}`
  });

  return (
    <HttpHeadersContext.Provider value={{ headers, setHeaders }}>
      {children}
    </HttpHeadersContext.Provider>
  );
};
