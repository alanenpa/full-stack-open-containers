import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { describe, it, expect } from 'vitest'

describe('Todo', () => {
  it('renders the todo text and its status', () => {
    const todo = { _id: '1', text: 'Write tests', done: false }

    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

    expect(screen.getByText('Write tests')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })
})