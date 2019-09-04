import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import classes from './Home.module.scss'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import storage from '../util/storage'
// export default function Home() {

// }
import Page from '../components/Page'

export default class Home extends React.Component {
    state = {
        count: 0,
        count2: 0,
        open: false,
        teamName: '',
        teamNameA: 'A',
        teamNameB: 'B',
        editTeamName: ''
    }
    render() {
        const setState = data => {
            this.setState(data)
        }
        let pageData = this.pageData = {}
        const { history } = this.props

        const { count, count2, open, teamName, teamNameA, teamNameB, editTeamName } = this.state

        function add() {
            setState({
                count: count + 1
            })
        }
        function minus() {
            if (count > 0) {
                setState({
                    count: count - 1
                })
            }
        }
        function add2() {
            setState({
                count2: count2 + 1
            })
        }
        function minus2() {
            if (count2 > 0) {
                setState({
                    count2: count2 - 1
                })
            }
        }
    
        const handleClose = () => {
            setState({
                open: false
            })
        }
    
        function clickA() {
            setState({
                editTeamName: 'a',
                open: true,
                teamName: teamNameA
            })
        }
    
        function clickB() {
            setState({
                editTeamName: 'b',
                open: true,
                teamName: teamNameB,
            })
        }
    
        function handleOk() {
            if (editTeamName === 'a') {
                setState({
                    open: false,
                    teamNameA: teamName
                })
            } else {
                setState({
                    open: false,
                    teamNameB: teamName
                })
            }
        }
    
        const handleNameChange = event => {
            setState({
                teamName: event.target.value
            })
        }
    
        function reset() {
        }

        const { isStart, timeText = '00:00' } = this.state
        const { timer } = this
        const start = () => {
            setState({
                isStart: true
            })
            this.startTime = new Date().getTime()
            this.timer = setInterval(() => {
                let time = (new Date().getTime() - this.startTime) / 1000
                let minute = Math.floor(time / 60)
                let second = Math.floor(time % 60)
                setState({
                    timeText: minute + ':' + second
                })
            }, 1000)
        }

        function record() {
            storage.set('a', 'aaa')
        }

        function addCount() {
            pageData.count++
        }

        

        return (
            <Page menu={[
                {
                    label: '重置',
                    click() {
                        setState({
                            count: 0,
                            count2: 0,
                            teamNameA: 'A',
                            teamNameB: 'B',
                        })
                    }
                },
                {
                    label: '交换',
                    click() {
                        let tmp = count
                        let newCount = count2
                        let newCount2 = tmp
                        tmp = teamNameA
                        let newTeamNameA = teamNameB
                        let newTeamNameB = tmp
                        setState({
                            count: newCount,
                            count2: newCount2,
                            teamNameA: newTeamNameA,
                            teamNameB: newTeamNameB,
                        })
                    }
                },
                {
                    label: '查看记录',
                    click() {
                        history.push('/records')
                    }
                },
            ]}>
                <div className={classes.container}>
                    <div class="common-container container">
                        <div className={classes.timeBox}>{timeText}</div>
                        <div className={classes.timeBox} onClick={addCount}>{pageData.count || '1'}</div>

                        <div className={classes.vs}>
                                <div className={classes.team} onClick={clickA}>{teamNameA}</div>
                                <div className={classes.text}>VS</div>
                                <div className={classes.team} onClick={clickB}>{teamNameB}</div>
                            </div>
                        <div className={classes.all}>
                            <section className="input-box">
                                <div className={classes.digital}>
                                    <div className={classes.digitalBg}>88</div>
                                    <div className={classes.digitalContent}>{ count }</div>
                                </div>
                                <div className={classes.btns}>
                                    <Button className={classes.btn} variant="contained" color="primary" onClick={add}>+</Button>
                                    <Button className={classes.btn} variant="contained" onClick={minus}>-</Button>
                                </div>
                            </section>
                            <div class={classes.ratio}>:</div>
                            <section class="input-box">
                                <div className={classes.digital}>
                                    <div className={classes.digitalBg}>88</div>
                                    <div class={classes.digitalContent}>{ count2 }</div>
                                </div>
                                <div className={classes.btns}>
                                    <Button className={classes.btn} variant="contained" color="primary" onClick={add2}>+</Button>
                                    <Button className={classes.btn} variant="contained" onClick={minus2}>-</Button>
                                    {/* <ui-raised-button class="btn" label=" + " primary @click="add2"/> */}
                                    {/* <ui-raised-button class="btn" label=" - " @click="minus2"/> */}
                                </div>
                            </section>
                            <div class="common-btns">
                                {/* <ui-raised-button label="重置" @click="reset"/> */}
                            </div>
                        </div>
                    </div>
                    <Button className={classes.btn} variant="contained" onClick={start}>{isStart ? '暂停' : '开始'}</Button>
                    <Button className={classes.btn} variant="contained" onClick={reset}>重置</Button>
                    <Button className={classes.btn} variant="contained" onClick={record}>记录</Button>
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle>设置队名</DialogTitle>
                        <DialogContent>
                            <TextField
                                // label="Name"
                                // className={classes.textField}
                                value={teamName}
                                onChange={handleNameChange}
                                // margin="normal"
                            />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    取消
                                </Button>
                                <Button onClick={handleOk} color="primary">
                                    确认
                                </Button>
                            </DialogActions>
                    </Dialog>
                    
                    
                </div>
            </Page>
        )
    }
}

