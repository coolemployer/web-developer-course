import React from "react"
import Button from "@material-ui/core/Button/Button"
import {loadNews, selectArticle} from "../data/action-creators";

import {connect} from "react-redux";

class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
          <h3>{this.props.selectedArticle}</h3>
        <Button onClick={this.props.loadNews} variant="contained" color="primary">
          Загрузить новости
        </Button>
        {this.props.isLoading && <div>Подождите, идет загрузка</div>}
        {this.props.isFailed && <div>Ой-ой :(</div>}
        <ul>
          {this.props.news.map((doc) => (
            <li key={doc.title}>
              <p onClick={ () => this.props.selectArticle(doc.title)}>{doc.title}</p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedArticle: state.article,
  news: state.news,
  isLoading: state.newsIsLoading,
  isFailed: state.newsLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
  selectArticle: (articleText) => dispatch(selectArticle(articleText)),
  loadNews: () => loadNews(dispatch)
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;
