import * as actions from '../../actions';
import * as constants from '../../constants';

import { Label, PageHeader, Root, Title } from './Level.css';

import Author from './Author';
import CodeComponent from './Code';
import Difficulty from './Difficulty';
import MarkdownComponent from './Markdown';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Level extends React.Component {
  componentWillMount() {
    this.props.activateLevel(this.props.match.params.address);
  }

  componentWillUnmount() {
    if (this.props.activateLevel) {
      this.props.deactivateLevel(this.props.activateLevel);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.level.deployedAddress !== nextProps.match.params.address)
      this.props.activateLevel(nextProps.match.params.address);
  }

  render() {
    const { level, levelCompleted } = this.props;

    if (!level) return null;
    const showCode = levelCompleted || level.revealCode;
    const showCompletedDescription =
      constants.SHOW_ALL_COMPLETE_DESCRIPTIONS || levelCompleted;

    let description = null;
    try {
      description = require(`../../gamedata/descriptions/levels/${
        level.description
      }`);
    } catch (e) {
      console.log(e);
    }
    let completedDescription = null;
    if (showCompletedDescription && level.completedDescription) {
      try {
        completedDescription = require(`../../gamedata/descriptions/levels/${
          level.completedDescription
        }`);
      } catch (e) {
        console.log(e);
      }
    }
    let sourcesFile = null;
    try {
      sourcesFile = require(`../../contracts/levels/${level.instanceContract}`);
    } catch (e) {
      console.log(e);
    }

    const nextLevelId = findNextLevelId(this.props.level, this.props.levels);

    return (
      <Root>
        <PageHeader>
          <Title>
            {level.name}{' '}
            {levelCompleted === true && <Label>Level completed!</Label>}
          </Title>
          <Difficulty level={parseInt(level.difficulty, 10)} />
        </PageHeader>

        {description && <MarkdownComponent target={description} />}

        {showCompletedDescription && completedDescription && (
          <MarkdownComponent target={completedDescription} />
        )}

        <div className="" style={{ marginTop: '5px' }}>
          {level.levelContract && (
            <div className="">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(evt) => this.props.loadLevelInstance(level, false)}
              >
                Get new instance
              </button>

              {this.props.levelEmitted && (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={(evt) => this.props.submitLevelInstance(level)}
                >
                  Submit instance
                </button>
              )}

              {levelCompleted && nextLevelId && (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={(evt) =>
                    this.props.router.push(
                      `${constants.PATH_LEVEL_ROOT}${nextLevelId}`
                    )
                  }
                >
                  Go to the next level!
                </button>
              )}
            </div>
          )}
        </div>

        {showCode && sourcesFile && (
          <div style={{ marginTop: '50px' }}>
            <div className="page-header">
              <h3>Sources</h3>
            </div>
            <CodeComponent target={sourcesFile} />
          </div>
        )}

        {level.author && <Author author={level.author} />}
      </Root>
    );
  }
}

function findNextLevelId(level, list) {
  for (let i = 0; i < list.length; i++) {
    const otherLevel = list[i];
    if (level.deployedAddress === otherLevel.deployedAddress) {
      if (i < list.length - 1) {
        return list[i + 1].deployedAddress;
      } else return null;
    }
  }
}

function mapStateToProps(state) {
  const level = state.gamedata.activeLevel;
  return {
    level: level,
    levels: state.gamedata.levels,
    levelCompleted:
      level && state.player.completedLevels[level.deployedAddress] > 0,
    levelEmitted:
      level && state.contracts.levels[level.deployedAddress] !== undefined,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      activateLevel: actions.activateLevel,
      deactivateLevel: actions.deactivateLevel,
      loadLevelInstance: actions.loadLevelInstance,
      submitLevelInstance: actions.submitLevelInstance,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
