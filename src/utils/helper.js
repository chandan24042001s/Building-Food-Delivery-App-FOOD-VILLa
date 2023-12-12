function filterData(searchText, restraunts) {
    const filterdata = restraunts.filter((restraunt) => {
     // console.log(restraunt);
      return restraunt.info.name.includes(searchText);
    });
    //console.log(filterdata);
    return filterdata;
  }

  export default filterData;