import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import SideBar from './sidebar';
import Spinner from 'react-bootstrap/Spinner'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Button, Modal } from 'react-bootstrap';

function Shop() {
    useEffect(() => {
        getItems();
    }, []);
    const [arr, setArr] = useState([]);
    const [show, setShow] = useState(false);

    const getItems = () => {
        axios.get(`https://fortnite-api.com/v2/shop/br`)
            .then(res => {
                const obj = res.data;
                // const gift=res.data.entries.giftable
                setArr(obj);
                // console.log(gift)
            })

    }
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const result = Object.values(arr);
    console.log("statearrayyyy", result)
    return (
        <div >
            <div className="content" style={{
                backgroundImage: `url("https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fseason-5%2FBR05_Social_-Launch_Hero-Line-Up-1920x1080-2117b3d382b87887271a17a78122b7316ff0c1c0.jpg")`
            }}>

                <Row>
                    <Col lg={4} md={4}>
                        <SideBar />
                    </Col>
                    <Col lg={8} md={8}>
                        <h1>FORTNITE SHOP</h1>
                        <input className="search" value="Search Items"></input>
                        <Button variant="primary" className="Cart" onClick={handleShow}>
                            {<FaIcons.FaCartArrowDown/>}
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Your Cart!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Purchased</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose} >
                                    Close
                                </Button>
                                <Button variant="primary" >
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        {result.map((i) => (<h2 className="shop-items">{i.daily && i.daily.entries.map((n) => (
                            <div className="card-items">
                                {/* <img src={n.vbuckIcon} />
                                    <h3>
                                        Regular Price:  {n.regularPrice} Giftable:{n.giftable} <FaIcons.FaCheck />
                                    </h3> */}
                                <Card className="card" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '20rem' }} variant="top" src="https://tse3.mm.bing.net/th?id=OIP.XDQ6pvSX4dAYu9_f9vmpLQAAAA&pid=Api" />
                                    <Card.Body>
                                        <Card.Title>Price :{n.regularPrice}$</Card.Title>
                                        <Card.Text>
                                            Giftabe:{<FaIcons.FaCheck />}
                                        </Card.Text>
                                        <button className="button" >
                                            Add To Cart
                                        </button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                        }
                        </h2>
                        )
                        )}
                    </Col>
                </Row>

            </div>
        </div>


    );
}
export default Shop;