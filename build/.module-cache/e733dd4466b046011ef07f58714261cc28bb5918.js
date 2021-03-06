var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit:function(e){
     window.scrollTo(0,document.body.scrollHeight);
    e.preventDefault;
    var author = this.refs.authorName.getDOMNode().value.trim();
    var text = this.refs.textName.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({
      author:author,
      text:text
    });
    this.refs.authorName.getDOMNode().value = "";
    this.refs.textName.getDOMNode().value ="";
    return;
  },
    render: function() {
        return (
          React.createElement("form", {className: "CommentForm"}, 
          React.createElement("input", {type: "text", ref: "authorName", placeholder: "Your name"}), 
          React.createElement("input", {type: "text", ref: "textName", placeholder: "Say something..."}), 
          React.createElement("input", {type: "button", onClick: this.handleSubmit, value: "提交"})
          )
        );
    }
});
