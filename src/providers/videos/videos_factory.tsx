import React, { createContext, useContext } from 'react';

import { AxiosHttpClient } from '../../infra/http/axios-http-client/axios-http-client';
import { IVideosContext, VideosHook } from './index';

const VideosContext = createContext<IVideosContext>({} as IVideosContext);

type IProviderProps = {
  children: React.ReactNode;
};

const VideosProvider = ({ children }: IProviderProps) => {
  return (
    <VideosContext.Provider
      value={VideosHook(
        new AxiosHttpClient(),
        new AxiosHttpClient(),
        'TODO COLOCAR A URL'
      )}
    >
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);

export default VideosProvider;
