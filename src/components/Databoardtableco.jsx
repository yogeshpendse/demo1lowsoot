export function Databoardtableco() {
  const loo = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {false ? (
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>loading...</h1>
      ) : (
        <table className="databoardtable__table">
          <thead className="databoardtable__tablehead">
            <tr className="databoardtable__theadtr">
              {/* <th className="databoardtable__theadth" scope="col">
                <span className="blank__letters">check</span>
              </th> */}
              <th className="databoardtable__theadth" scope="col">
                date
              </th>
              <th className="databoardtable__theadth" scope="col">
                travel
              </th>
              <th className="databoardtable__theadth" scope="col">
                passengers
              </th>
              <th className="databoardtable__theadth" scope="col">
                distance
              </th>
              <th className="databoardtable__theadth" scope="col">
                Type
              </th>
              <th className="databoardtable__theadth" scope="col">
                Source
              </th>
              <th className="databoardtable__theadth" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="databoardtable__tablebody">
            {[...loo].map((item, idx) => {
              // key={item._id}
              return (
                <tr key={idx} className="databoardtable__tabletr">
                  {/* <td>
                    <div className="databoardtable__tablecheck">
                      <input type="checkbox" defaultChecked />
                    </div>
                  </td> */}
                  <td className="databoardtable__tabletd">25 May 2022</td>
                  <td className="databoardtable__tabletd">
                    {idx % 2 === 0 ? "Road" : "Air"}
                  </td>
                  <td className="databoardtable__tabletd">{idx * 2}</td>
                  <td className="databoardtable__tabletd">{item} Kms</td>
                  <td className="databoardtable__tabletd">
                    {/* {
                      databoardstate.allfactors[item.travelBy].find(
                        (element) =>
                          element.id === JSON.stringify(item.factorType)
                      ).factor
                    } */}
                    {idx % 2 === 0 ? "Petrol Automobile" : "Domestic"}
                  </td>
                  <td className="databoardtable__tabletd">
                    <div className="databoardtable__csource">
                      <img
                        className="databoardtable__csourceimg"
                        src={"mmt"}
                        alt="mmt"
                      />
                    </div>
                  </td>
                  <td className="databoardtable__tabletd">coming soon</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
