/** @jsx React.DOM */

var DynamicSearch = React.createClass({

  // sets initial state
  getInitialState: function(){
    return { searchString: '' };
  },

  // sets state, triggers render method
  handleChange: function(event){
    // grab value form input box
    this.setState({searchString:event.target.value});
  },

  render: function() {

    var datasets = this.props.items;
    var searchString = this.state.searchString.trim().toLowerCase();

    // filter datasets list by value from input box
    if(searchString.length > 0){
      datasets = datasets.filter(function(dataset){
        return dataset.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Datasets" />
        <ul>
          { datasets.map(function(dataset){ return <li>{dataset.name} </li> }) }
        </ul>
      </div>
    )
  }

});

// list of datasets, defined with JavaScript object literals
var datasets = [
  {"name": "pr-tasmax-tasmin_day_BCSD-ANUSPLIN300-GFDL-ESM2G_historical-rcp26_r1i1p1_19500101-21001231"}, 
  {"name": "pr-tasmax-tasmin_day_BCSD-ANUSPLIN300-HadGEM2-CC_historical-rcp45_r1i1p1_19500101-20991230"},
  {"name": "pr-tasmax-tasmin_day_BCCAQ-ANUSPLIN300-CCSM4_historical-rcp45_r2i1p1_19500101-21001231"},
  {"name": "pr-tasmax-tasmin_day_BCSD-ANUSPLIN300-CanESM2_historical-rcp85_r1i1p1_19500101-21001231"},
];

React.render(
  <DynamicSearch items={ datasets } />,
  document.getElementById('main')
);
