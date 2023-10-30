import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render as ReactTestingLibraryRender } from '@testing-library/react';

/** 컴포넌트 테스트 코드에서, 컴포넌트가 Context 를 사용할 수 있게 Provider 만 제공한다. */
export function render({ children }: PropsWithChildren<unknown>) {
  return ReactTestingLibraryRender(<MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>);
}
