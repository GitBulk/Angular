'use strict';

app.factory('lessonData', function(){
	return {
		result : {
			// data is here
			name: "AngularJS code camp",
			date: "2013-01-19",
			time: "8:30 am",
			location: {
				address: "1 Le Duan",
				city: "Sai Gon",
			},
			imageUrl: "data:image/jpeg;base64,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",
			lessons: [
				{
					name: "Directives master class",
					creatorName: "Ronaldo",
					duration: "1 h",
					level: "Advanced",
					//description: "You will learn directive",
					description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
					likeCount: 0,
					dislikeCount: 0
				},
				{
					name: "Scopes master class",
					creatorName: "Messi",
					duration: "2 h",
					level: "Advanced",
					//description: "You will learn Scope",
					description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
					likeCount: 0,
					dislikeCount: 0
				},
				{
					name: "Controller master class",
					creatorName: "Falcao",
					duration: "1.5 h",
					level: "Advanced",
					//description: "You will learn controller",
					description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
					likeCount: 0,
					dislikeCount: 0
				}
			]
		} // end of result object
	}; // end of return
});