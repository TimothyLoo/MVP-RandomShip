module.exports = {
  stars: [],
  crashed: true,
  moveShip: (e) => {
    if (module.exports.crashed) return;
    const ship = document.getElementById('ship');
    let position = Number(ship.style.left.slice(0, -2));

    if (e.key === 'j' || e.target.innerHTML === 'left') {
      if (position < 1) return;
      ship.style.left = `${(position -= 10)}px`;
    }
    if (e.key === 'l' || e.target.innerHTML === 'right') {
      if (position > 770) return;
      ship.style.left = `${(position += 10)}px`;
    }
  },
};
