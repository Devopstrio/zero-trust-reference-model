module "zt_model_cluster" {
  source = "./modules/compute"

  cluster_name = "zero-trust-model-hub"
  node_count   = 3
}

module "zt_model_db" {
  source = "./modules/database"

  instance_class = "db.t3.medium"
}

resource "kubernetes_namespace" "zt_model" {
  metadata {
    name = "zero-trust-reference-model"
  }
}

resource "aws_iam_role" "zt_model_evaluator" {
  name = "zt-model-evaluator-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "eks.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_prometheus_workspace" "zt_model_metrics" {
  alias = "zt-model-monitoring"
}
