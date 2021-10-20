import React from 'react'

function ViewTrainers() {
    return (
    <>
<section className="hero is-fullheight" style={{fontFamily:"Comfortaa"}}>
        <div className="hero-body">
            <div className="container">
                <h2 className="title is-2" style={{textAlign:'center'}}>Trainer List</h2>
                    <table className="table table is-fullwidth" style={{borderRadius:20}}>
                        <thead>
                            <tr style={{fontWeight:"bold", fontSize:20}}>
                                <th>Sr.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile No</th>
                                <th>Email Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th>1</th>
                            <td>Vishwa</td>
                            <td>Sonar</td>
                            <td>7041131336</td>
                            <td>sonarvishwa@gmail.com</td>
                            </tr>
                            <tr>
                            <th>2</th>
                            <td>Salman</td>
                            <td>Shaikh</td>
                            <td>9203201255</td>
                            <td>salmannotkhane@gmail.com</td>
                            </tr>
                            <tr>
                            <th>3</th>
                            <td>Kwinsi</td>
                            <td>Sadhu</td>
                            <td>7894563214</td>
                            <td>sadhukwinsi@gmail.com</td>
                            </tr>
                            <tr>
                            <th>4</th>
                            <td>Dhwani</td>
                            <td>Karkar</td>
                            <td>785236149</td>
                            <td>dhwanikarkar@gmail.com</td>
                            </tr>
                            <tr>
                            <th>5</th>
                            <td>Jayrajsinh</td>
                            <td>Zala</td>
                            <td>9638527412</td>
                            <td>zala05@gmail.com</td>
                            </tr>
                            <tr>
                            <th>6</th>
                            <td>Hetul</td>
                            <td>Parmar</td>
                            <td>9856321457</td>
                            <td>parmarhetul@gmail.com</td>
                            </tr>
                            <tr>
                            <th>7</th>
                            <td>Rushit</td>
                            <td>Anadkat</td>
                            <td>9832651475</td>
                            <td>rushitanadkat@gmail.com</td>
                            </tr>
                            <tr>
                            <th>8</th>
                            <td>Nikhil</td>
                            <td>Parmar</td>
                            <td>7632514896</td>
                            <td>nikhilparmar@gmail.com</td>
                            </tr>
                            <tr>
                            <th>9</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>7531592584</td>
                            <td>johndoe@gmail.com</td>
                            </tr>
                            <tr>
                            <th>10</th>
                            <td>Lorem</td>
                            <td>Ipsum</td>
                            <td>9637414562</td>
                            <td>loremipsum@gmail.com</td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
 
</section>
    </>
    )
}

export default ViewTrainers
