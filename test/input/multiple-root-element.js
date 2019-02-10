function Component(moduleOrName, selector, options) {
    return {};
}

function pug(strings) {}

const app = {}

Component(app, selector, {
    template: pug`
    .drop-shadow.monitor-component
        h3.overview-header.clearfix
            span.pull-left Project management and monitoring
            span.pull-right(ng-if="$ctrl.isAutoReloading" ng-class="{ 'header-wait': $ctrl.isAutoReloading }" title="refreshing…")
        inline-help-toggle(source="monitor")
        .container
            monitor-summary-component(project="$ctrl.project")
            monitor-actions-component(project="$ctrl.project")
            monitor-target-groups-component(
                project="$ctrl.project"
                project-price="$ctrl.projectPrice"
                sampling-progress="$ctrl.samplingProgress")
    debug-monitor-component(admin-only-in-production)
`
})
