var CommentBox = React.createClass({displayName: "CommentBox",
  loadCommentsFromServer:function(){
    var nowstr = new Date()
    var urlstr = this.props.url + "?a="+ nowstr.toString();
    $.ajax({
      url:urlstr,
      dataType:'json',
      success:function(data){
        this.setState({data:data.data});
        console.log(data);
      }.bind(this),
      error:function(xhr,status,err){
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    });
  },
  getInitialState:function(){
    console.log("getInitialState");
    return {data:[]}

  },
  componentDidMount:function(){
    console.log("componentDidMount");
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer,this.props.pulltime);
  },
  render:function(){
    return (
    React.createElement("div", {className: "CommentBox"},
    React.createElement("h1", null, "Comment"),
    React.createElement(CommentList, {data: this.state.data}),
    React.createElement(CommentForm, null))
    );
  }
});

React.render(
  React.createElement(CommentBox, {url: "./json/weibo.json", pulltime: 2000}),
  document.getElementById('content')
);
