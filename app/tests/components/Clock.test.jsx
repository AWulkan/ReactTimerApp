const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Clock = require("Clock");

describe("Clock", () => {
     it("Should exist", () => {
         expect(Clock).toExist();
     });

     describe("render", () => {
        it("Should render clock to output", () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            let $el = $(ReactDOM.findDOMNode(clock));
            let actualText = $el.find(".clock-text").text();

            expect(actualText).toBe("01:02");
        });
     });

     describe("formatSeconds", () => {
        it("Should format seconds", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            const seconds = 615;
            const expected = "10:15";
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it("Should format seconds when min/sec are less than 10", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            const seconds = 61;
            const expected = "01:01";
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
     });
});
