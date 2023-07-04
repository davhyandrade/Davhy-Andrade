export default function Graphic() {
  const Graphic = [
    {
      name: 'NextJS',
      domain: 5,
    },
    {
      name: 'Typescript',
      domain: 4,
      dataAnimationDelay: 0.3
    },
    {
      name: 'Sass',
      domain: 4,
      dataAnimationDelay: 0.2
    },
    {
      name: 'MongoDB',
      domain: 4,
      dataAnimationDelay: 0.1
    },
    {
      name: 'MySQL',
      domain: 4,
    },
    {
      name: 'Photoshop',
      domain: 5,
      dataAnimationDelay: 0.5
    },
    {
      name: 'Illustrator',
      domain: 3,
    },
    {
      name: 'Redux',
      domain: 4,
      dataAnimationDelay: 0.3
    },
    {
      name: 'Git',
      domain: 4,
      dataAnimationDelay: 0.5
    },
  ];

  return (
    <div className="graphic-field">
      {Graphic.map((item, id) => {
        return (
          <div key={id} className="column">
            <div>
              <span>{item.name}</span>
              <span>
                <span>{item.domain}</span>/<span>5</span>
              </span>
            </div>
            <div className="bar">
              <div data-animation="progress-bar-animation" className="progress" data-progress={item.domain}>
                <div data-animation-delay={item.dataAnimationDelay ? item.dataAnimationDelay : 0 }></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
