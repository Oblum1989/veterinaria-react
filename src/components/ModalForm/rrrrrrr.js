// function ModalForm(){
//   return(
//     <div
//       className="modal fade"
//       id="staticBackdrop"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabindex="-1"
//       aria-labelledby="staticBackdropLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="staticBackdropLabel">
//               Nueva Mascota
//             </h5>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <form id="form">
//             <input type="hidden" name="id" id="inputId" />
//             <div className="modal-body">
//               <div className="row g-3 mb-3">
//                 <div className="col">
//                   <select
//                     className="form-select"
//                     aria-label="Default select example"
//                     id="tipo"
//                   >
//                     <option selected>Tipo de animal</option>
//                     <option>Perro</option>
//                     <option>Gato</option>
//                     <option>Pez</option>
//                     <option>Otro</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="row g-3">
//                 <div className="col">
//                   <input
//                     type="text"
//                     id="nombre"
//                     name="nombre"
//                     className="form-control"
//                     placeholder="Nombre"
//                   />
//                 </div>
//                 <div className="col">
//                   <select
//                     id="dueno"
//                     className="form-select"
//                     aria-label="Default select example"
//                   >
//                     <option selected>Dueño</option>
//                     <option>Juan</option>
//                     <option>Jose</option>
//                     <option>Camilo</option>
//                     <option>Sandra</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Cerrar
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 data-bs-dismiss="modal"
//                 id="btnSave"
//               >
//                 Crear
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ModalForm;