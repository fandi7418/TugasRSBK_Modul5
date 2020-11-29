import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { Card, Row, Col, Divider } from 'antd';
const { Meta } = Card;
export default class tekkom extends Component {
    constructor(props) {

        super(props);
        this.state = {
            tekkom: [],
            visible: false,
            name: "",
            address: "",
            region: "",
        };
    }

    handleButton = (name) => {
        alert(name);
    };
    handleTambahOrang = () => {
        this.setState({
            visible: true,
        });
    };
    handleNama = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    };
    handleNim = (e) => {
        this.setState({
            address: e.target.value,
        });
        console.log(this.state.address);
    };
    handleAsal = (e) => {

        this.setState({
            region: e.target.value,
        });
        console.log(this.state.region);
    };
    // handleSubmit = () => {
    //     if (
    //         this.state.nama !== "" &&
    //         this.state.nim !== "" &&
    //         !this.state.asal !== ""
    //     ) {
    //         axios({
    //             method: "post",
    //             url: "https://backendcatatantugas.herokuapp.com/mahasiswa/add",
    //             headers: {
    //                 accept: "*/*",
    //             },
    //             data: {
    //                 nama: this.state.nama,
    //                 nim: this.state.nim,
    //                 asal: this.state.asal,
    //             },
    //         })
    //             .then((data) => {
    //                 alert("berhasil menambahkan");
    //                 window.location.reload();
    //             })
    //             .catch((error) => {
    //                 alert("gagal lur");
    //             });
    //     } else {

    //         alert("pastikan semua kolom terisi");
    //     }
    // };
    componentDidMount() {
        axios({
            method: "get",
            url: "http://api.tvmaze.com/shows",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data); 
                this.setState({
                    tekkom: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>LIST MOVIE</h1>
                    </center>
                    {/* <center>
                        <button onClick={this.handleTambahOrang}>Tambah orang</button>

                    </center> */}
                    {/* <Modal
                        title="Tambah Orang Bosque"
                        centered
                        visible={this.state.visible}
                        onOk={this.handleSubmit}
                        onCancel={() => this.setState({ visible: false })}
                        width={500}
                    >
                        <div style={{ textAlign: "center" }}>
                            <p>Nama : </p>{" "}
                            <input
                                type="text"
                                placeholder="nama"
                                onChange={this.handleNama}
                            />
                            <br />
                            <p>Nim : </p>{" "}
                            <input type="text" placeholder="nim" onChange={this.handleNim} />
                            <br />
                            <p>Asal : </p>{" "}
                            <input
                                type="text"
                                placeholder="asal"
                                onChange={this.handleAsal}
                            />
                            <br />
                        </div>
                    </Modal> */}

                    {this.state.tekkom.map((results, index) => {

                        return (
                            <Divider orientation="center">

                            
                            <Row gutter={30}>
      
                            <Card
                            hoverable
                            style={{ width: 500 }}
                            cover={<img src={results.image.original} />}
                          >
                            <Meta title={results.name}  />
                            <Meta description = { results.daerah_batik} />
                          </Card>
                         
                            </Row>
                            
                            </Divider>
                            
                            
                        );
                    })}
                </div>
            </div>
        );
    }
}