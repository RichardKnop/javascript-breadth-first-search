"use strict";

define(["BFS/Node", "BFS/Algorithm"], function (Node, Algorithm) {

    return function () {

        this.run = function () {
            var node1 = new Node(1),
                node2 = new Node(2),
                node3 = new Node(3),
                node4 = new Node(4),
                node5 = new Node(5),
                node6 = new Node(6),
                node7 = new Node(7),
                node8 = new Node(8),
                node9 = new Node(9),
                node10 = new Node(10),
                node11 = new Node(11),
                node12 = new Node(12),
                bfs = new Algorithm();

            node1.addChild(node2);
            node1.addChild(node3);
            node1.addChild(node4);
            node2.addChild(node5);
            node2.addChild(node6);
            node5.addChild(node9);
            node5.addChild(node10);
            node4.addChild(node7);
            node4.addChild(node8);
            node7.addChild(node11);
            node7.addChild(node12);

            document.getElementById("search").addEventListener("click", function () {
                var searchFor = parseInt(document.getElementById("searchFor").value, 10),
                    resultEl = document.getElementById("result"),
                    result,
                    route;
                try {
                    result = bfs.search(searchFor, node1);
                    console.log(result.getValue());
                    route = bfs.getLastRoute();
                    resultEl.innerHTML = "Found. Algorithm went like this: " + route.join(" => ");
                } catch (e) {
                    resultEl.innerHTML = e;
                }
                return false;
            }, false);
        };

    };

});