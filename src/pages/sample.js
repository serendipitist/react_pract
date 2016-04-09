/**
 * Created by shireesha on 07/04/16.
 */
import React from 'react';
import ajax from 'superagent';
import { Link } from 'react-router';//make your custom url

// to get the data from  Git hub api
class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {commits: [],forks : []};
    }

    fetchFeed(type) {
        ajax.get(`https://api.github.com/repos/facebook/react/${type}`)
            .end((error, response) => {
                    if (!error && response) {
                        this.setState({ [type]: response.body });
                    } else {
                        console.log(`Error fetching ${type}`, error);
                    }
                }
            );
    }

    selectMode(event) {
        this.setState({ mode: event.currentTarget.dataset.mode });
    }

    componentWillMount() {
        this.fetchFeed('commits');
        this.fetchFeed('forks');
    }

    renderCommits() {
        return this.state.commits.map((commit, index) => {
            const author = commit.author ? commit.author.login : 'Anonymous';

            return (<p key={index}>
                <strong>{author}</strong>:
                <a href={commit.html_url}>{commit.commit.message}</a>.
            </p>);
        });
    }

    renderForks() {
        return this.state.forks.map((fork, index) => {
            const owner = fork.owner ? fork.owner.login : 'Anonymous';

            return (<p key={index}>
                <strong>{owner}</strong>: forked to
                <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.
            </p>);
        });
    }
    render() {
        let content;

        if (this.state.mode === 'commits') {
            content = this.renderCommits();
        } else  {
            content = this.renderForks();
        }

        return (<div>
 <button onClick={this.selectMode.bind(this,'commits')} data-mode="commits">Show Commits</button>
            <button onClick={this. selectMode.bind(this,'fork')} data-mode="forks"> Show Fork </button>
            {content}
            <li><Link to="/react">React</Link></li>
        </div>);
    }
}


export default Sample;
