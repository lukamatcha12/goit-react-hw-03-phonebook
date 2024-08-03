import './Filter.css'
export const Filter = ({ filter, onFilterChange }) => {
    return (
      <>  
      <p>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={onFilterChange}
      />
      </>
    );
  };