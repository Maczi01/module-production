// @vitest-environment jsdom

import React from 'react';
import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import Characters from "../../src/pages/Characters";
import {useLoaderData, MemoryRouter, Route, Routes} from "react-router-dom";


vi.mock('react-router-dom', async () => {
  const originalModule = await vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useLoaderData: vi.fn(),
  };
});

describe('Characters', () => {
  test('should return an error if first name is missing', () => {

    const mockCharacters = [
      {id: 1, name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
      {id: 2, name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    ];

    useLoaderData.mockReturnValue({characters: mockCharacters});

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Characters/>}/>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Select a character:')).toBeInTheDocument();
  });
});
