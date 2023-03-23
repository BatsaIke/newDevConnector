import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../actions/postActions.js";
import { Spinner } from "../layout/Spinner.js";

const Posts = ({getPost,post:{post,loading}}) => {
  return <div>Posts</div>;
};

Posts.propTypes = {
    getPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired   
};

const mapStateToProps= state=>({
    post:state.post
})

export default connect(mapStateToProps,{getPost}) (Posts);
