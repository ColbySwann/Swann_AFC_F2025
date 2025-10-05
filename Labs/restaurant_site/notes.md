What should have been in the react site menu



// const [currentIndex, setCurrentIndex] = useState(0);
//
//
// const handleClick = () => {
//     setCurrentIndex((prev) => (
//         prev === menuData.length - 1 ? 0 : prev + 1
//     ))
// }
//
// const handleClickPrev = () => {
//    setCurrentIndex((prev) => (prev === 0 ? menuData.length - 1 : prev - 1))
// }
//
//
//
// return(
//     <>
//         <div className="bg-body page-menu" >
//         <div className="container-fluid" id="menu_buttons-container">
//             <div className="row" id="menu_buttons-row">
//                 <div className="col-lg-5">
//
//                 </div>
//                 <div className="col-lg-1" id="prevCol">
//                     <Button onClick={handleClickPrev} type="button" className="btn btn-outline-light prev" id="prev">Prev</Button>
//                 </div>
//                 <div className="col-lg-1" id="nextCol">
//                     <Button onClick={handleClick} type="button" className="btn btn-outline-light next" id="next">Next</Button>
//                 </div>
//                 <div className="col-lg-5">
//
//                 </div>
//             </div>
//         </div>
//
//         <div className="container-lg" data-bs-theme="dark" id="container1">
//             <MenuItem item={menuData[currentIndex]} />
//         </div>
//         </div>
//     </>
//
// )
