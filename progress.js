const svgs = "http://www.w3.org/2000/svg";

class CircularProgress {
    constructor(element, options) {
        if (!element) {
            throw new Error("Element is necessary")
        }

        const svg = document.createElementNS(svgs, "svg");
        const outerCircle = document.createElementNS(svgs, "circle");
        const defaultOptions = {
            size: 150,
            thickness: 10,
            baseColor: "#EEF3F6",
            progressColor: "#0058F6",
        }

        options = Object.assign(defaultOptions, options);

        const {size, thickness, baseColor, progressColor} = options;
        const radius = size / 2;
        const realRadius =  radius - thickness * 2;
        const circumference = realRadius * 2 * Math.PI;

        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.classList.add("progress-circle");

        outerCircle.classList.add("progress-circle__outer");
        outerCircle.setAttribute("stroke", baseColor);
        outerCircle.setAttribute("stroke-width", thickness);
        outerCircle.setAttribute("cx", radius);
        outerCircle.setAttribute("cy", radius);
        outerCircle.setAttribute("r", realRadius);
        outerCircle.setAttribute("fill", "transparent");

        const innerCircle = outerCircle.cloneNode();

        innerCircle.classList.add("progress-circle__inner");
        innerCircle.setAttribute("stroke", progressColor);
        innerCircle.setAttribute("stroke-dasharray", circumference);

        this._circumference = circumference;
        this._innerCircle = innerCircle;
        this._element = element;
        this._isAnimated = false;
        this._isHidden = false;

        this.setProgress(0);

        svg.append(outerCircle, innerCircle);
        element.append(svg);
    }


    setProgress(value) {
        if (isNaN(value)) {
            value = 0;
        }
        value = Math.min(Math.max(value, 0), 100);
        if (this._value === value) return;
        this._value = value;
        this._updateProgress();
    }

    showProgress() {
        if (!this._isHidden) {
            return
        }
        this._isHidden = false
        this._setVisibility()
    }

    hideProgress() {
        if (this._isHidden) {
            return
        }
        this._isHidden = true
        this._setVisibility()
    }

    _updateProgress() {
        let percent;

        if (this._isAnimated) {
            percent = 45;
        } else {
            percent = this._value;
        }

        const circumference = this._circumference;
        const offset = circumference - percent / 100 * circumference;
        this._innerCircle.style.strokeDashoffset = offset;
    }

    _setVisibility() {
        this._isHidden ? this._element.classList.add("progress__hidden") : this._element.classList.remove("progress__hidden");
    }

}
