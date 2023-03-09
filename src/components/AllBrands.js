import React, {Component} from "react";
import {getAllBrands} from "../redux/greenMobile"
import {connect} from "react-redux";
import {IMAGE_URL} from "../utils/constants";
import "./style.css"

class AllBrands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: []
        };
    }

    componentDidMount() {
        const {getAllBrands} = this.props;
        getAllBrands();
    }

    componentDidUpdate(prevProps) {
        const {greenMobileStore} = this.props;
        const {allBrandData} = greenMobileStore;

        if (
            prevProps.greenMobileStore.allBrandData !== allBrandData &&
            allBrandData !== null &&
            allBrandData !== false
        ) {
            this.setState({brands: allBrandData})
        }
    }

    showAllBrands = () => {
        const {brands} = this.state;
        let brandData;
        if (brands.success) {
            brandData = brands.data.map(item => {
                return (
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card m-2  shadow border-round p-1" style={{width: "10rem"}}>
                            <img
                                src={`${item.image}`}
                                alt=""
                                onClick={() => {
                                    this.selectedBrand(item.id)
                                }}
                            />
                        </div>
                    </div>
                )
            })

        }
        return brandData;
    }

    selectedBrand = (brandId) => {
        // debugger;
        this.props.history.push(
            `/models/${brandId}`
        )
    }

    render() {
        return (
            <>
                {/* <!-- SELECT Brand STARTS --> */}
                <div class="container my-4"><span class="border-left fs-2">Select Brands </span>
                </div>
                <div class="container">

                    <div class="row text-center justify-content-center">
                        {this.showAllBrands()}
                    </div>
                </div>
                {/* <!-- SELECT Brand ENDS --> */}
            </>
        )
    }

}

const mapStateToProps = ({greenMobileStore}) => {
    return {
        greenMobileStore
    };
};

const mapDispatchToProps = {
    getAllBrands: (payload) => getAllBrands(payload),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllBrands);