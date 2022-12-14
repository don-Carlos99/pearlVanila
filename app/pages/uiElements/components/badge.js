var appBadge = {
    html: `
    <div class="">
	<div class="page-hero page-container" id="page-hero">
		<div class="padding d-flex">
			<div class="page-title">
				<h2 class="text-md text-highlight">Badge</h2>
				<small class="text-muted">Small count and labeling component.</small>
			</div>
			<div class="flex"></div>
			
		</div>
	</div>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="table-responsive">
				<table class="table table-theme table-row v-middle">
					<thead>
						<tr>
							<th class="text-muted" style="width:60px">Name</th>
							<th class="text-muted"></th>
							<td></td>
							<th class="text-muted" style="width:50px">Light</th>
							<th class="text-muted" style="width:110px">Circle</th>
							<th class="text-muted" style="width:30px">xs</th>
						</tr>
					</thead>
					<tbody>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-primary text-uppercase">Primary</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-primary-lt">14</span>
							</td>
							<td>
								<span class="badge badge-circle text-primary"></span>
								<small class="text-muted">Primary</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-primary"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-info text-uppercase">Info</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-info-lt">50</span>
							</td>
							<td>
								<span class="badge badge-circle text-info"></span>
								<small class="text-muted">Info</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-info"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-success text-uppercase">Success</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-success-lt">75</span>
							</td>
							<td>
								<span class="badge badge-circle text-success"></span>
								<small class="text-muted">Success</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-success"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-warning text-uppercase">Warning</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-warning-lt">30</span>
							</td>
							<td>
								<span class="badge badge-circle text-warning"></span>
								<small class="text-muted">Warning</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-warning"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-danger text-uppercase">Danger</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-danger-lt">65</span>
							</td>
							<td>
								<span class="badge badge-circle text-danger"></span>
								<small class="text-muted">Danger</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-danger"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-secondary text-uppercase">Secondary</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-secondary-lt">35</span>
							</td>
							<td>
								<span class="badge badge-circle text-secondary"></span>
								<small class="text-muted">Secondary</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-secondary"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-light text-uppercase">Light</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-light-lt">20</span>
							</td>
							<td>
								<span class="badge badge-circle text-light"></span>
								<small class="text-muted">Light</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-light"></span>
							</td>
						</tr>
						<tr class="v-middle">
							<td>
								<a href="#">
									<span class="badge badge-dark text-uppercase">Dark</span>
								</a>
							</td>
							<td class="flex">
								<div class="bg-light r r-3 py-1 my-1"></div>
								<div class="bg-light r r-3 py-1 my-1 col-6"></div>
							</td>
							<td></td>
							<td>
								<span class="badge bg-dark-lt">20</span>
							</td>
							<td>
								<span class="badge badge-circle text-dark"></span>
								<small class="text-muted">Dark</small>
							</td>
							<td>
								<span class="badge badge-circle xs text-dark"></span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
    `,
    init: function() {
        document.getElementById('content').innerHTML = this.html;
    }
}