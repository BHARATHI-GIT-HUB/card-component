import React from "react";
import Card from "./index";
import { connect } from "react-redux";
const Cards = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <Card key={item.id} itemData={item} />
      ))}
    </div>
  );
};

const mapStateTOProps = (state) => {
  return {
    items: state.card.items,
  };
};

export default connect(mapStateTOProps)(Cards);
