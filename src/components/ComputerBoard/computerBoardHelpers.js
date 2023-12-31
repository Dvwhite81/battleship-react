import EmptySquare from './EmptySquare';

const makeEmptySquares = (handleClick) => {
  const squares = [];

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const square = (
        <EmptySquare
          key={[x, y]}
          x={x}
          y={y}
          handleClick={handleClick}
        />
      );
      squares.push(square);
    }
  }
  return squares;
};

export default makeEmptySquares;
