var converter = new Showdown.converter();
var Comment = React.createClass({
    render: function() {
      // var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
          <div className = "Comment">
            <h2 className = "CommentAuthor">{this.props.author}</h2>
            <h3 className = "CommentText">{this.props.text}</h3>
          </div>
        );
    }
});
