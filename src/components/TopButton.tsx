import Arrow from 'public/images/timeline/arrow.svg';

export default function TopButton() {
  function handleTopButton() {
    return window.scrollTo(0, 0);
  }

  return (
    <div onClick={handleTopButton} className="top-button">
      <Arrow />
    </div>
  );
}
