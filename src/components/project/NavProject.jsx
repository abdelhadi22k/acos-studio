import React from "react";

const NavProject = ({ allCat, showCategory }) => {
  return (
    <nav className="navProject">
      {allCat.map((category, index) => {
        const categoryClass = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;

        return (
          <div className="navButton_box" key={index} onClick={() => showCategory(category)}>
           
            <button className={`navButton ${categoryClass}`}>
              {category}
            </button>
          </div>
        );
      })}
    </nav>
  );
};

export default NavProject;
