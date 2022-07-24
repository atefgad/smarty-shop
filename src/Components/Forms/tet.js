<form onSubmit={(e) => e.preventDefault()}>
  <h5 className="mt-4 mb-2 ">Add Address</h5>
  <hr className="border-top border-2" />
  <div className="row mt-2 mb-4">
    <div className="col-sm-6 mb-3 pb-1">
      <input className="form-control" type="text" placeholder="first name" />
    </div>
    <div className="col-sm-6 mb-3 pb-1">
      <input className="form-control" type="text" placeholder="last name" />
    </div>
    <div className="col-3 mb-3 pb-1">
      <input className="form-control" type="text" placeholder="+20" />
    </div>
    <div className="col-9 mb-3 pb-1">
      <input
        className="form-control"
        type="number"
        placeholder="Ex: 012345678910"
      />
    </div>
    <div className="col-12 mb-3 pb-1">
      <textarea
        className="form-control"
        placeholder="St.name/Building number/Apartment numbe"
        maxlength="255"
        rows="5"
      ></textarea>
    </div>
    <div className="col mb-3 pb-1">
      <select className="form-select">
        <option value="" selected="" disabled="" hidden="">
          State/Region
        </option>
        <option value="Cairo">Cairo</option>
        <option value="Giza">Giza</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Sohag">Sohag</option>
        <option value="Asyut">Asyut</option>
        <option value="Aswan">Aswan</option>
      </select>
    </div>
  </div>
  <button className="btn btn-primary fw-bold w-25 text-center">Add</button>
</form>;
