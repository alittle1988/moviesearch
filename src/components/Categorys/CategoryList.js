

export default function CategoryList(props) {
  return (
    <>
      <h1 className="categoryTitle">Categories</h1>
        <ul className="categoryList">
            {props.list.map((item, index) => {
              return(
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="text-white" >{item}</a>
              </li>)
            })}
        </ul>
      
    </>
  );
}
