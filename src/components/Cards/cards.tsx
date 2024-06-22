import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export type CardsParams = {
  id: string;
  name: string;
  icon: string;
};

type CardsProps = {
  cards: CardsParams[];
  [key: string]: any;
}

function Cards({ cards, name, register, setValue }: CardsProps) {
  const [selected, setSelected] = useState<string | undefined>(cards.at(0)?.id);

  const gridClass = `grid grid-cols-4 gap-4`;
  
  return (
    <>
      <div className={gridClass}>
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`${selected === card.id ? 'border-dark' : 'border'}`}
            onClick={() => {setSelected(card.id); setValue(name, card.id);}}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 transition-colors duration-200 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
              <Image className="mb-3 h-8 w-8" src={card.icon} />
              <Card.Text>{card.name}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <input type="hidden" value={selected} {...register(name)} />
    </>
  );
};


export default Cards;