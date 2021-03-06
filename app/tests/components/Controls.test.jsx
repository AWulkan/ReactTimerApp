const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Controls = require("Controls");

describe("Controls", () => {
    it("Should exist", () => {
        expect(Controls).toExist();
    });

    describe("render", () => {
        it("Should render pause when started", () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find("button:contains(Pause)");

            expect($pauseButton.length).toBe(1);
        });

        it("Should render start when paused", () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $startButton = $el.find("button:contains(Start)");

            expect($startButton.length).toBe(1);
        });
    });
});
