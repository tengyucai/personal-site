import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const random = Math.floor(Math.random() * 50);
    setAge(random);
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'eclipse',
    label: 'Eclipse count',
    value: 5,
    link:
      'https://www.eclipse-chaser-log.com/eclipse-log/793',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: '11',
  },
];

export default data;
