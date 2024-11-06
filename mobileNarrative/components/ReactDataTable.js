(() => {

    const lolData = [
        {
            "weapon": "Drake Sword",
            "beast": "Hellkite Drake",
            "location": "Undead Parish",
            "weaponType": "Straight Sword"
        },
        {
            "weapon": "Gargoyle Tail Axe",
            "beast": "Bell Gargoyle",
            "location": "Undead Parish",
            "weaponType": "Axe"
            
        },
        {
            "weapon": "Dragon King Great Axe",
            "beast": "Gaping Dragon",
            "location": "The Depths",
            "weaponType": "Axe"
            
        },
        {
            "weapon": "Dragon Greatsword",
            "beast": "Stone Dragon",
            "location": "Ash Lake",
            "weaponType": "Greatsword"
            
        },
        {
            "weapon": "Pricilla's Dagger",
            "beast": "Crossbreed Pricilla",
            "location": "Painted World",
            "weaponType": "Straight Sword"
            
        },
        {
            "weapon": "Moonlight Greatsword",
            "beast": "Seath the Scaleless",
            "location": "Crystal Caverns",
            "weaponType": "Greatsword"
            
        },
        {
            "weapon": "Guardian Tail",
            "beast": "Sanctuary Guardian",
            "location": "Oolacile Sanctuary,",
            "weaponType": "whip"
            
        },
        {
            "weapon": "Obsidian Greatsword",
            "beast": "Black Dragon Kalameet",
            "location": "Upper Oolacile",
            "weaponType": "Greatsword"
            
        },
    ];
    
    const Filters = (props) => {
        let updateWeaponType = (clickEvent) => {
            props.updateFormState({
                weaponType: clickEvent.target.value,
            });
        }

        let updateBeastType = (clickEvent) => {
            props.updateFormState({
                beast: clickEvent.target.value,
            });
        }
        let updateLocation = (clickEvent) => {
            if(clickEvent.target.value.checked) {
                props.updateFormState({
                    Location: 'Undead Parish',
                });
            } else {
                props.updateFormState({
                    Location: '',
                });
            }

        }
        let updateWeaponName = (clickEvent) => {
            props.updateFormState({
                weaponName: clickEvent.target.value,
            });
        }

        

        return (
            <React.Fragment>
                <div className='container text-start'>
                    <div className="row ">
                        <div className='col'>
                            <b>Weapon Type:</b>
                        </div>
                        <div className='col-md-2'>
                            <select onChange={updateWeaponType}>
                                <option value=''>&nbsp;</option>
                                <option value='Axe'>Axe</option>
                                <option value='Straight Sword'>Long Sword</option>
                                <option value='Greatsword'>Greatsword</option>
                                <option value='Whip'>Whip</option>
                            </select>
                        </div>
                        <div className='col'>
                            
                        </div>
                        
                        <div className='col'>
                            <b>Dragons:</b>
                        </div>
                        <div className='col-md-2'>
                            <select onChange={updateBeastType}>
                                <option value=''>&nbsp;</option>
                                <option value='Dragon'>Dragon</option>
                                <option value='Half-Dragon'>Half Dragon</option>
                                <option value='Not-Dragon'>Not a Dragon</option>
                            </select>
                        </div>
                        <div className='col col-sm'>
                          <b>Location:</b>
                      </div>
                      <div className='col col-sm'>
                          <input type="checkbox" onChange={updateLocation}/>
                      </div>
                      <div className='col col-sm'>
                          <b>Weapon Name:</b>
                      </div>
                      <div className='col col-sm'>
                          <input type="text" onChange={updateWeaponName}/>
                      </div>
                    </div>
                </div>
            </React.Fragment>
        )   

    }

    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Weapon</th>
                            <th>Beast</th>
                            <th>Location</th>
                            <th>Weapon Type</th>
                            
                        </tr>
                        {props.dataToDisplay.map((row, i) => (
                            <tr key={i}>
                                {console.log(row)}
                                <td>{row.weapon}</td>
                                <td>{row.beast}</td>
                                <td>{row.location}</td>
                                <td>{row.weaponType}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }


    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);
            this.originalData = props.originalData;
            this.state = {
                weapon: "Drake Sword",
                beast: "Hellkite Drake",
                location: "Undead Parish",
                weaponType: "Straight Sword"
               
            }
            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        } 

        render() {
            let filteredData = this.originalData;
            console.log(filteredData);

            if (this.state.weaponType !== 'Axe') {
                filteredData = filteredData.filter((row) => row.weaponType === this.state.weaponType);
            }
            if (this.state.weaponType !== 'Greatsword') {
                filteredData = filteredData.filter((row) => row.weaponType === this.state.weaponType);
            }
            if (this.state.weaponType !== 'Straight Sword') {
                filteredData = filteredData.filter((row) => row.weaponType === this.state.weaponType);
            }
            if (this.state.weaponType !== 'Whip') {
                filteredData = filteredData.filter((row) => row.weaponType === this.state.weaponType);
            }
            


            return (
                <React.Fragment>
                    <Filters 
                    weaponType={this.state.weaponType}
                    beast={this.state.beast}
                    Location={this.state.location}
                    weaponName={this.state.weaponName}
                        
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <DataTable dataToDisplay={filteredData} />
                </React.Fragment>
            );


        }

    }



    const container = document.getElementById('react-data-table');
	const root = ReactDOM.createRoot(container);
	root.render(<ReactDataTable originalData={lolData}/>);

})();


