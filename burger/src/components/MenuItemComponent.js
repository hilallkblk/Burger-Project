function MenuItemComponent({image,name,content,price}) {
  return (
    <div className="menuItem">
      <div className="imageContainer" style={{ backgroundImage: `url(${image})` }} />
      <div className="textContent">
        <h1>{name}</h1>
        <h6>{content}</h6>
        <i>
          <p style={{ color: 'red' }}>{price} TL</p>
        </i>
      </div>
    </div>
  );
}

export default MenuItemComponent;
